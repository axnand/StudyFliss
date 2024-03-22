import { NextRequest, NextResponse } from 'next/server';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand, PutObjectCommand, PutObjectCommandInput, S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import crypto from 'crypto';

export async function POST(req: NextRequest, res: NextResponse) {
    res.headers.set('Access-Control-Allow-Origin', '*'); // Allow requests from localhost:3000
    res.headers.set('Access-Control-Allow-Methods', 'POST'); // Allow only POST method

    if (!req.body) {
        return NextResponse.json({ error: 'Error generating presigned URLs.', message: 'Request body is empty.' });
    }
    try {
        const ACCESS_KEY = process.env.CLOUDFLARE_BUCKET_ACCESS_KEY!;
        const SECRET_ACCESS_KEY = process.env.CLOUDFLARE_BUCKET_SECRET_ACCESS_KEY!;
        const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID!;
        const S3 = new S3Client({
            endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: ACCESS_KEY,
                secretAccessKey: SECRET_ACCESS_KEY
            },
            region: "auto",
        } as S3ClientConfig);
        console.log(req.body);
        const { files }: { files: File[] } = await req.json();
        console.log(files);
        const presignedUrls = [];

        for (const file of files) {
            const params = {
                Bucket: "studyfliss",
                Key:
                    file.name.split('.')[0] +
                    '-' +
                    crypto.randomBytes(32).toString('hex') +
                    '.' +
                    file.name.split('.').slice(-1),
            } as PutObjectCommandInput;
            const command = new PutObjectCommand(params);
            const signedUrl = await getSignedUrl(S3, command, { expiresIn: 3600 });
            presignedUrls.push(signedUrl);
        }
        console.log(presignedUrls);
        return NextResponse.json({ presignedUrls });
    } catch (error: any) {
        console.error('Error generating presigned URLs:', error);
        return NextResponse.json({ error: 'Error generating presigned URLs.', message: error.message }, {status: 500});
    }
}
