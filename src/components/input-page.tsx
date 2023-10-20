import BirthDateForm from '@/components/birthdate-form';

const InputPage = () => {
  return (
    <section className='flex h-full w-full max-w-xs flex-col items-center justify-center px-4 sm:max-w-lg md:max-w-xl lg:max-w-3xl'>
      <div className='flex w-full flex-[2] flex-col items-center justify-center gap-1.5 text-center md:flex-1'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>
          Age Counter
        </h1>
        <p className='text-xs text-muted-foreground sm:text-sm md:text-base'>
          Enter your birth date to see your precise age.
        </p>
      </div>
      <div className='flex w-full flex-[3] flex-col items-end md:flex-1 md:items-start md:gap-4'>
        <BirthDateForm />
      </div>
    </section>
  );
};

export default InputPage;
