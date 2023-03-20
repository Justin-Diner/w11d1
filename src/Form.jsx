import { useState } from "react"

const Form = () => {
	const [name, setName] = useState("");
	const updateName = (e) => {
		const updatedName = e.target.value
		setName(updatedName)
	
	return (
		<>
			<form onSubmit={updateFormValue}> 
				<label> Name
				<input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>
				</label>

				<label for="email"> Email </label>
				<input type="text" name="email" id="email"></input>
			

				<label for="phone-number"> Phone Number
				<input type="text" name="phone-number" id="phone-number"></input>
				</label>

				<label for="phone-type"> Phone Type
				<select name="phone-type" id="phone-type">
					<option value="Home">Home</option>
					<option value="Work">Work</option>
					<option value="Mobile">Mobile</option>
				</select>
				</label>

				<label for="instructor"> Instructor
				<input type="radio" name="staff" value="Instructor" id="instructor"></input>
				</label>
				<label for="student"> Student
				<input type="radio" name="staff" value="Student" id="student"></input>
				</label>

				<label for="bio"> Bio
				<input type="textarea" name="bio" id="bio"></input>
				</label>

				<label for="email-signup"> Email Signup
				<input type="checkbox" name="email-signup" id="email-signup"></input>
				</label>
				
				<button type="submit">Submit</button>

			</form>
		</>
	)
}

export default Form