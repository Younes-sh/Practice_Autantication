import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default  function RegisterPAge () {
    return (
        <div className="container main">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
             <Form.Floating className="mb-3">
               <Form.Control
                 id="floatingInputCustom"
                 type="email"
                 placeholder="name@example.com"
               />
               <label htmlFor="floatingInputCustom">Email address</label>
             </Form.Floating>


             <Form.Floating className="mb-3">
               <Form.Control
                 id="floatingInputCustom"
                 type="email"
                 placeholder="name@example.com"
               />
               <label htmlFor="floatingInputCustom">Username</label>
             </Form.Floating>


             <Form.Floating>
               <Form.Control
                 id="floatingPasswordCustom"
                 type="password"
                 placeholder="Password"
               />
               <label htmlFor="floatingPasswordCustom">Password</label>
             </Form.Floating>

                <Button variant="primary" className='mt-4' size="lg">
                  Register now
                </Button>
        </div>
    );
}