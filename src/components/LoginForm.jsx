import React from 'react';
import Button from './Button';
import Input from './Input';

export default function LoginForm() {
  return (
    <div className="px-10 mt-20 w-full sm:w-128 mx-auto ">
      <Input
        modifiers="h-14 w-full mb-6 px-5 shadow-lg  text-orange-primary focus:outline-0 focus:border-2 focus:border-orange-primary "
        placeholder="Username"
      />
      <Input
        modifiers="h-14 w-full mb-6 px-5 shadow-lg  text-orange-primary focus:outline-0 focus:border-2  focus:border-orange-primary"
        placeholder="Passowrd"
      />
      <section className="flex gap-x-4 mt-5">
        <Button modifiers="w-1/2" type="primary">
          Login
        </Button>
        <Button modifiers="w-1/2" type="secondary">
          Register
        </Button>
      </section>
      <div className='flex items-center justify-center mt-5'>
        <Button type='default' modifiers='text-sm'>Forgot Password?</Button>
      </div>
    </div>
  );
}
