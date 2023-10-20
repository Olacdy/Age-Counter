import BirthDateForm from '@/components/birthdate-form';

import useBirthDateStore from '@/context/birthdate-context';

const App = () => {
  const birthDate = useBirthDateStore((state) => state.birthDate);

  return (
    <main className='flex flex-col items-center justify-center w-full h-screen max-h-screen'>
      <section className='w-full max-w-xs md:max-w-lg'>
        {birthDate ? <></> : <BirthDateForm />}
      </section>
    </main>
  );
};

export default App;
