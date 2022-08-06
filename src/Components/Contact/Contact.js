import React from 'react'
import { Container, Row, Col ,Image} from "react-bootstrap";
import contact from '../../Assets/Images/contact.jpg';
import { useForm } from "react-hook-form";
import Tbutton from '../Buttons/Tbutton';

const Contact = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
      <>
        <Container className='mt-5' fluid>
          <Row>
            <Col sm={12} md={6}>
              <h2 className='section-heading text-center'>
                E-planner Contact Form
              </h2>
              <h4 className='section-subheading text-center'>
                Send us a message for your personalized event booking.
              </h4>
              <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  {...register("Full-Name")}
                  className='my-3 w-75 py-2'
                  placeholder='Full Name'
                  type='text'
                />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <input
                  {...register("Email", { required: true })}
                  className='my-3 w-75 py-2'
                  placeholder='Email'
                  type='email'
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input
                  {...register("Phone", { required: true })}
                  className='my-3 w-75 py-2'
                  placeholder='Phone'
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <select
                  {...register("program-type")}
                  className='w-75 my-3 py-2'
                  placeholder='select your program'>
                  <option value='birthday'>Birthday</option>
                  <option value='wedding'>wedding</option>
                  <option value='office'>office</option>
                </select>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input
                  {...register("Messages", { required: true })}
                  className='my-3 w-75 mb-5 py-5'
                  placeholder='Write your message here'
                  type='text-area'
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <Tbutton text='submit' type='submit' />
              </form>
            </Col>
            <Col sm={12} md={6}>
              <Image src={contact} fluid />
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default Contact