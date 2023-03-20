import { useState } from "react"

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [phoneType, setPhoneType] = useState("");
	const [instructor, setInstructor] = useState("");
	const [bio, setBio] = useState("");
	const [emailSignUp, setEmailSignUp] = useState("off");
	const [errors, setErrors] = useState([]);


	const updateName = (e) => {
		const updatedName = e.target.value
		setName(updatedName)
	}

	const emailSignupStatus = (e) => {
		if(emailSignUp === "on"){
			setEmailSignUp("off");
		} else {
			setEmailSignUp("on");
		}
	}

	const submissionValidation = (e) => {
		e.preventDefault();
		let currentErrors = errors; 

		const states = {
			name, 
			email, 
			phoneNumber,
			phoneType, 
			instructor, 
			bio, 
			emailSignUp
		}

		if (name.length === 0) {
			currentErrors.push("Name is required!!!!!")
		}

		if (email.length === 0) {
			currentErrors.push("Email is required!!!!!")
		}

		if (phoneNumber.length !== 0 && phoneNumber[3] !== "-" && phoneNumber[7] !== "-"){
			currentErrors.push("Improper telephone format")
		}

		if ((phoneNumber.length > 0) && (phoneType === "")){
			currentErrors.push("Must select phone type")
		}

		if (bio.length > 280) {
			currentErrors.push("Bio too long!!!!!")
		}

		if (errors.length) {
			console.log(errors);
		} else {
		console.log(states);
		}
	}
	
	return (
		<>
			<form onSubmit={submissionValidation}> 
				<label> Name
				<input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>
				</label>

				<label for="email"> Email </label>
				<input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
			
				<label for="phone-number"> Phone Number
				<input type="text" name="phone-number" id="phone-number" onChange={(e) => setPhoneNumber(e.target.value)}></input>
				</label>

				<label for="phone-type"> Phone Type
				<select name="phone-type" id="phone-type" onChange={(e) => setPhoneType(e.target.value) }>
					<option value=""></option>
					<option value="Home">Home</option>
					<option value="Work">Work</option>
					<option value="Mobile">Mobile</option>
				</select>
				</label>

				<label for="instructor"> Instructor
				<input type="radio" name="staff" value="Instructor" id="instructor" onChange={(e) => setInstructor(e.target.value)}></input>
				</label>

				<label for="student"> Student
				<input type="radio" name="staff" value="Student" id="student" onChange={(e) => setInstructor(e.target.value)}></input>
				</label>

				<label for="bio"> Bio
				<input type="textarea" name="bio" id="bio" onChange={(e) => setBio(e.target.value)}></input>
				</label>

				<label for="email-signup"> Email Signup
				<input type="checkbox" name="email-signup" id="email-signup" onChange={emailSignupStatus}></input>
				</label>
				
				<button type="submit">Submit</button>

			</form>
		</>
	)
}


export default Form