import InputFC from './InputFunction';
function FormFC () {
    return (
        <div className="container">
            <h1>Email</h1>
           <InputFC type="email" name="email" placeholder = "Enter your email address" ></InputFC>
           <InputFC type="password" name="password" placeholder = "Enter your password" ></InputFC>
           <InputFC type="submit"></InputFC>
        </div>
    );
}
export default FormFC;