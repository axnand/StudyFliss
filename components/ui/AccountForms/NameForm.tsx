'use client';

import Button from '@/components/ui/Button';
import Card_ from '@/components/ui/Card_';
import { updateName } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Input from '../Input';

export default function NameForm({ userName }: { userName: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new name is the same as the old name
    if (e.currentTarget.fullName.value === userName) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateName, router);
    setIsSubmitting(false);
  };

  return (
    <Card_
      title="Your Name"
      description="Please enter your full name, or a display name you are comfortable with."
      footer={
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <p className="pb-4 sm:pb-0">64 characters maximum</p>
          <Button
            variant="slim"
            type="submit"
            form="nameForm"
            disabled={isSubmitting}
          >
            Update Name
          </Button>
        </div>
      }
    >
      <div className="mt-8 mb-4 text-xl font-semibold">
        <form id="nameForm" onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            name="fullName"
            className="w-1/2 p-3 rounded-md bg-background"
            defaultValue={userName}
            placeholder="Your name"
            maxLength={64}
          />
        </form>
      </div>
    </Card_>
  );
}
