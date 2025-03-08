import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function ContactPage() {
  const schema = yup
    .object({
      name: yup.string().min(3).required(),
      subject: yup.string().min(3).required(),
      email: yup.string().email().required(),
      message: yup.string().min(3).required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className='form-container'>
      <h1>Contact form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
        <label>
          Full Name <br />
          <input type='text' placeholder='Full Name' {...register('name')} />
          <span className='contact-form-error'>{errors.name?.message}</span>
        </label>
        <label>
          Subject <br />
          <input type='text' placeholder='Subject' {...register('subject')} />
          <span className='contact-form-error'>{errors.subject?.message}</span>
        </label>
        <label>
          Email <br />
          <input type='email' placeholder='E-mail' {...register('email')} />
          <span className='contact-form-error'>{errors.email?.message}</span>
        </label>
        <label>
          Message <br />
          <textarea placeholder='Message' {...register('message')} />
          <span className='contact-form-error'>{errors.message?.message}</span>
        </label>

        <button>Send</button>
      </form>
    </div>
  );
}