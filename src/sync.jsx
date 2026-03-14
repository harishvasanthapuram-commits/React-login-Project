import React from "react";
import { useState } from "react";

function SyncForm(){

  const [inputData, userValue] = useState({
        Company_Name:'',       
        Employee_Count:'',
        Name:'',
        Email:'',
        Contact_Number:'',
        Sector:'',
        Enter_capcha:'',
    });


   

    const userData =(e)=>{
        userValue({
            ...inputData,
            [e.target.name]:e.target.value
           
        });
     
    }
    // const handleSubmit =(e)=>{
    //         e.preventDefault();
    //         console.log(inputData);
    // }
    const[errors,setErrors] = useState({});

const validate = () => {
    let newErrors = {};

    if (!inputData.Company_Name) {
        newErrors.Company_Name = "Company name is required";
    } else if (!/^[A-Za-z\s]+$/.test((inputData.Company_Name))) {
        newErrors.Company_Name = "Company name must be latters";
    }

    if (!inputData.Name) {
        newErrors.Name = "Name is required";
     } else if (!/^[A-Za-z\s]+$/.test((inputData.Name))) {
        newErrors.Name = " name must be latters";
    }

    if (!inputData.Email) {
        newErrors.Email = "Email is required";
    } else if (!inputData.Email.includes("@")) {
        newErrors.Email = "Invalid email format";
    }

    if (!inputData.Contact_Number) {
        newErrors.Contact_Number = "Contact number is required";
    } else if (isNaN(inputData.Contact_Number)) {
        newErrors.Contact_Number = "Mobile number must be numbers";
    }
    else if (inputData.Contact_Number.length !== 10){
         newErrors.Contact_Number = "Enter valid 10 digit numbers";

    }

    if (!inputData.Sector){
        newErrors.Sector = "Sector is required";
    }

    if (!inputData.Enter_capcha) {
        newErrors.Enter_capcha = "Captcha required";
    } else if (inputData.Enter_capcha !== "hRySNLa") {
        newErrors.Enter_capcha = "Captcha not matched";
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
};
      const handleSub = (e) => {
         e.preventDefault();

    let validationErrors = validate();

    if (validationErrors){
        console.log(inputData);
    }
}
    
    return(
    <section className="bodysection" >
        <header className="syncHeader">
                <div className="logo">
                    <h2 >V.HR</h2>
                </div>

                <div className="list">
                    <ul className="headerlist">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Concact us</a></li>
                    </ul>
                </div>

                <div className="headerbutton">
                    <button className="bodybtn1">Request Demo</button>
                    <button className="bodybtn2">Send Enquery</button>
                </div>
        </header>

        <section className="bodycontainer">
            <section className="section1">
                <section className="bodydata" >
                    <h1>Welcome To <span className="bodyspan">AI technologies</span></h1>
                    <p className="bodypara">Synchrm revolutionizes workforce management
                         with AI-driven insights, private LLM technology,<br/> <br/>
                          and advanced biometric security for the future of work.Overall, 
                          the AI revolution is shaping the future of how people live and work</p>
                </section>

                <section className="bodybutton">
                    <button>requst Demo</button>
                </section>

                <section className="bodylist">
                    <section>
                        <h2>39+</h2>
                        <p>Industries</p>
                    </section>
                    <section>
                        <h2>20+</h2>
                        <p>Support</p>
                    </section>
                    <section>
                        <h2>95.3%</h2>
                        <p>up Time</p>
                        </section>
                </section>
            </section>
            <section className="bodyform">
                <div className="formheader">
                    <span>send to the Enquery</span>
                    <form className="bodylogin" onSubmit={handleSub}>
                                    <div className="input_label">
                                        <label for="fname">Company Name *</label>
                                    <input type="text" name="Company_Name" onChange={userData} 
                                    placeholder="Enter your Company Name.." />
                                    {errors.Company_Name && <span className="errormsg">{errors.Company_Name}</span>}
                                    
                                       
                                    </div>
                        <div className="input22">
                                    <div className="input_label">
                                        <label for="fname">Employee Count *</label>
                                        <select name="Employee_Count" onChange={userData}>
                                            <option value="select Employees Count">select Employees Count</option>
                                            <option value="1-10 Employees">1-10 Employees</option>
                                            <option value="11-50 Employees">11-50 Employees</option>
                                            <option value="51-100 Employees">51-100 Employees</option>
                                            <option value="101-200 Employees">101-200 Employees</option>
                                            <option value="200-1000 Employees">200-1000 Employees</option>
                                        </select>
                                    </div>

                                <div className="input_label">
                                        <label for="fname">Name *</label>
                                        <input type="text" name="Name" onChange={userData} 
                                        placeholder="Emter your Name"/>
                                        {errors.Name  && <span className="errormsg">{errors.Name}</span>}
                                      
                                    </div>                 
                        </div>
                                    <div className="input_label">
                                        <label for="fname">Email *</label>
                                        <input type="text" name="Email" onChange={userData} placeholder="Enter your Email"/>
                                         {errors.Email  && <span className="errormsg">{errors.Email}</span>}
                                        
                                    </div>
                        <div className="input22">
                                    <div className="input_label">
                                        <label for="fname">Contact Number *</label>
                                        <input type="text" name="Contact_Number" onChange={userData} placeholder="Enter your Mobile Nymber" />
                                        {errors.Contact_Number && <span className="errormsg">{errors.Contact_Number}</span>}
                                        
                                    </div>

                                    <div className="input_label">
                                        <label for="fname">Sector *</label>
                                        <input type="text" name="Sector" onChange={userData} placeholder="Enter your Sector"/>
                                        
                                     
                                    </div> 
                        </div> 
                                    <div className="input_label1">
                                        <label for="fname" >Captcha * :</label>
                                        <label for="fname" className="captcha">h R y S N L a</label>
                                    </div> 

                                    <div className="input_label">
                                        <label for="fname">Enter Captcha *</label>
                                        <input type="text" name="Enter_capcha" onChange={userData} placeholder="Enter Above Capacha" />
                                        {errors. Enter_capcha&& <span className="errormsg">{errors.Enter_capcha}</span>}
                                    </div>

                                     <div className="input_button">
                                        <button type="submit">Send Enquery</button>
                                    </div> 
                                    
                 </form>
                     
                </div>
            </section>
         </section>

    </section>
    )
} 
export default SyncForm;