const Form = () => {
	return (
		<>
			<form>
				<label> Name
				<input type="text" name="name" id="name"></input>
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
				
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default Form