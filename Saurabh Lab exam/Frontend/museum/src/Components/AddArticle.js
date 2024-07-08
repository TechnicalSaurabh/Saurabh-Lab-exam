import React, { Component } from 'react';
import axios from 'axios';


class AddArticle extends Components {
constructor(props) {
super(props);
this.state = {
Name: '',
Category: '',
createrName: ''

}
}

// When value changes of the fields
handleChange = (event) => {
this.setState({ [event.target.name]: event.target.value });
}

// To add new employee when user submits the form
handleSubmit = (event) => {
event.preventDefault();
const { firstName, lastName, email, phone } = this.state;
axios.post('http://localhost:3000/article/addArticle', {
Name: Name,
Category: Category,
createrName: createrName,

})
.then((response) => {
console.log(response);
this.props.history.push('/');
})
.catch((error) => {
console.log(error);
});
}

render() {
return (
<div className="container">
<form style={customStyle} onSubmit={this.handleSubmit}>
<label>
First Name
<input
name="Name"
type="text"
value={this.state.firstName}
onChange={this.handleChange}
className="form-control"
/>
</label>
<br />
<label>
Last Name
<input
name="creatorName"
type="text"
value={this.state.lastName}
onChange={this.handleChange}
className="form-control"
/>
</label>
<br />
<label>
Email
<input
name="email"
type="text"
value={this.state.email}
onChange={this.handleChange}
className="form-control"
/>
</label>
<br />
<label>
Phone No
<input
name="phone"
type="text"
value={this.state.phone}
onChange={this.handleChange}
className="form-control"
/>
</label>
<br />
<input
type="submit"
value="submit"
className="btn btn-primary"
/>
</form>
</div>
);
}
}

export default AddArticle;
