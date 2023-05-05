'use client';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { AiFillGithub } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import Input from '../inputs/Input';
import Heading from '../Heading';
import Button from '../Button';
import Modal from './Modal';
import axios from 'axios'; 


import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { useRouter } from 'next/navigation';


export default function LoginModal() {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success('Login successfully');
        router.refresh();
        loginModal.onClose();
      }

      if(callback?.error) {
        toast.error(callback.error);
      }
    })
  }

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="
      flex
      flex-col
      gap-4
    ">
      <Heading
        title="Welcome back"
        subtitle="Login to your account!"
      />
      <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr/>
      <Button 
        outline
        label="Continue by Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button 
        outline
        label="Continue by Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className="
        text-neutral-500
        text-center
        mt-4
        font-light  
      ">
        <div className="flex items-center gap-2 justify-center">
          <div>
            First time using Airbnb?
          </div>
          <div 
          onClick={toggle}
          className="text-neutral-800 cursor-pointer hover:underline
          ">
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal 
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
