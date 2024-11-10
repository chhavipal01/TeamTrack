import React from 'react';

const Login = () => {
    
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
     
      const submitHandler = (e)=>{
        e.preventDefault()
        console.log(" form submitted")
      }  





  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
          submitHandler(e)

        }} className='flex flex-col items-center justify-center'>
          <input required
            className='text-gray outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
          />
          <input required
            className='text-gray outline-none bg-transparent border-2 border-emerald-600 mt-3 rounded-full py-3 px-5 text-xl placeholder:text-gray-400'
            type='password'
            placeholder='Enter Password'
          />
          <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg  py-3 px-8 w-full rounded-full placeholder:text-white'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;