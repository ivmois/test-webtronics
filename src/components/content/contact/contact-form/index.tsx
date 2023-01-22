import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonType } from '../../../../types/enums';
import Button from '../../../button';
import styles from './form.module.sass';
import axios from 'axios';

interface IUser {
  name: number;
  email: string;
  phone: string;
}

const ContactForm = () => {
  const nameRegExp = /[a-zA-za-яА-яёЁ]$/;
  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  const schema = yup.object().shape({
    name: yup.string().matches(nameRegExp, 'invalid name format').required('name is required!'),
    email: yup.string().email().required('email is required!'),
    phone: yup.string().matches(phoneRegExp, 'phone number is not valid').required('phone is required!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IUser) => {
    axios.post(`http://localhost:3004/feedback`, { ...data }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        <input type="text" className={`${styles.input} ${errors.name && styles.error}`} placeholder="Name" {...register('name')} />
        {errors.name && <span className={styles.errorText}>{errors.name?.message}</span>}
      </label>

      <label className={styles.label}>
        <input type="text" className={`${styles.input} ${errors.phone && styles.error}`} placeholder="Phone" {...register('phone')} />
        {errors.phone && <span className={styles.errorText}>{errors.phone?.message}</span>}
      </label>

      <label className={styles.label}>
        <input type="text" className={`${styles.input} ${errors.email && styles.error}`} placeholder="E-mail" {...register('email')} />
        {errors.email && <span className={styles.errorText}>{errors.email?.message}</span>}
      </label>
      <label className={styles.wrapButton}>
        <Button type={ButtonType.submit} text={'Send'} onClick={() => handleSubmit(onSubmit)} />
      </label>
    </form>
  );
};

export default ContactForm;
