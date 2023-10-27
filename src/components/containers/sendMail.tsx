'use client'
import { FC, LegacyRef, ReactElement, useRef } from 'react'
import { useFormik } from 'formik'
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver'
import TechSkillsSvg from '../../assets/svg/tech-skills.svg'
import Image from 'next/image'
import Input from '../common/input'
import TextArea from '../common/textArea'
import Button from '../common/button'
import { ToastContainer, toast } from 'react-toastify'
import emailJs from '@emailjs/browser'

interface SendMailProps {
  bgColor: string
  fontSize: string
  text: string
  padding: string
  textColor: string
}

const SendMail: FC<SendMailProps> = ({ bgColor, fontSize, text, padding, textColor }: SendMailProps) => {
  const ref = useRef<string | HTMLFormElement>()
  // const entry = useIntersectionObserver(ref, { threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] })
  // const percentVisible = entry?.intersectionRatio ? Math.floor(entry?.intersectionRatio * 100) : 0

  const validate = (values: any) => {
    const errors = {
      name: '',
      email: '',
      subject: '',
      description: '',
      errorCount: 0,
    }

    if (!values.name) {
      errors.name = 'Required'
      errors.errorCount++
    } else if (values.name.length > 30) {
      errors.name = 'Must be 30 characters or less'
      errors.errorCount++
    }

    if (!values.email) {
      errors.email = 'Required'
      errors.errorCount++
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
      errors.errorCount++
    }
    if (!values.subject) {
      errors.subject = 'Required'
      errors.errorCount++
    } else if (values.subject.length > 100) {
      errors.subject = 'Must be 100 characters or less'
      errors.errorCount++
    }
    if (!values.description) {
      errors.description = 'Required'
      errors.errorCount++
    } else if (values.description.length > 500) {
      errors.description = 'Must be 500 characters or less'
      errors.errorCount++
    }
    if (errors.errorCount > 0) {
      return errors
    }
    return {}
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      description: '',
    },
    validate,
    onSubmit: (values) => {
      emailJs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? '',
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? '',
          ref.current ?? '',
          process.env.NEXT_PUBLIC_EMAIL_AUTH_ID ?? '',
        )
        .then(
          (result) => {
            toast('Email sent successfully!', {
              position: toast.POSITION.TOP_CENTER,
              className: 'foo-bar',
            })
          },
          (error) => {
            console.log(error.text)
          },
        )
    },
  })

  return (
    <div id="contact">
      <div
        style={{
          backgroundColor: bgColor,
          padding: padding,
        }}
        className="rounded-large w-full h-full leading-snug flex"
      >
        <div>
          <p
            style={{
              fontSize: fontSize,
              color: textColor,
            }}
          >
            <em>{text}</em>
          </p>
        </div>
        <div>{/* <Image src={TechSkillsSvg} height={300} width={300} alt="tech"></Image> */}</div>
      </div>
      <form ref={ref as LegacyRef<HTMLFormElement>} onSubmit={formik.handleSubmit}>
        <div className="m-2 form-grid gap-2">
          <div className="input-1">
            <Input
              value={formik.values.name}
              onChange={(e) => formik.setFieldValue('name', (e.target as any).value)}
              id="name"
              name="name"
              inputType={'text'}
              bgColor="#1D1C16"
              textColor="#FFF480"
              borderColor="#FFF480"
              placeholder="Enter your name"
            ></Input>
            {formik.touched.name && formik.errors.name ? (
              <div className="px-8 text-sm text-red-600">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="input-2">
            <Input
              id="email"
              name="email"
              value={formik.values.email}
              onChange={(e) => formik.setFieldValue('email', (e.target as any).value)}
              inputType={'text'}
              bgColor="#1D1C16"
              textColor="#FFF480"
              borderColor="#FFF480"
              placeholder="Enter your email id"
            ></Input>
            {formik.touched.email && formik.errors.email ? (
              <div className="px-8 text-sm  text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="input-3">
            <Input
              id="subject"
              name="subject"
              value={formik.values.subject}
              onChange={(e) => formik.setFieldValue('subject', (e.target as any).value)}
              inputType={'text'}
              bgColor="#1D1C16"
              textColor="#FFF480"
              borderColor="#FFF480"
              placeholder="Enter the subject"
            ></Input>
            {formik.touched.subject && formik.errors.subject ? (
              <div className=" px-8 text-sm text-red-600">{formik.errors.subject}</div>
            ) : null}
          </div>
          <div className="input-4">
            <Button type={'submit'} bgColor="#FFF480" textColor="#FFF480" borderColor="#FFF480"></Button>
          </div>
          <div className="input-5">
            <TextArea
              id="description"
              name="description"
              value={formik.values.description}
              onChange={(e) => formik.setFieldValue('description', (e.target as any).value)}
              inputType={'text'}
              bgColor="#1D1C16"
              textColor="#FFF480"
              borderColor="#FFF480"
              placeholder="Enter the description"
            ></TextArea>
            {formik.touched.description && formik.errors.description ? (
              <div className=" px-8 text-sm  text-red-600">{formik.errors.description}</div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  )
}

export default SendMail
