import Spinner from '@/components/ui/spinner';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { ITheme, INoRendererConfig } from '@cyntler/react-doc-viewer';

interface NotesPDFViewerProps extends React.ComponentPropsWithoutRef<'div'> {
    link: string;
}

const CenteredSpinner = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Spinner />
        </div>
    );
};

export default function NotesDocViewer({
    link,
    ...props
}: NotesPDFViewerProps) {
    return (
        <div {...props}>
            <DocViewer
                documents={[
                    {
                        uri: link
                    }
                ]}
                pluginRenderers={DocViewerRenderers}
                theme={{
                    primary: 'hsl(var(--primary))',
                    secondary: 'hsl(var(--secondary))',
                    tertiary: 'hsl(var(--card))',
                    textPrimary: 'hsl(var(--background))',
                    textSecondary: 'hsl(var(--background))',
                    textTertiary: 'hsl(var(--primary))',
                    disableThemeScrollbar: false
                }}

                config={{
                    header: {
                        disableFileName: true,
                        disableHeader: true,
                    },
                    pdfVerticalScrollByDefault: false,
                    loadingRenderer: {
                        overrideComponent: CenteredSpinner,
                        showLoadingTimeout: 500
                    },
                }}
                className='w-full h-full rounded-2xl bg-background'
            />
        </div>
    );
}
