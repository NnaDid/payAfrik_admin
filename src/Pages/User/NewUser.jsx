import React from 'react'
import './NewUser.css'

function NewUser() {
    return (
        <div className="NewUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label> Username</label>
                    <input type="text" placeholder="Doe"/>
                </div>
                <div className="newUserItem">
                    <label> Full Name</label>
                    <input type="text" placeholder="John Doe"/>
                </div>
                <div className="newUserItem">
                    <label> Email</label>
                    <input type="email" placeholder="John@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label> Phone</label>
                    <input type="tel" placeholder="+1 123 345 56"/>
                </div>
                <div className="newUserItem">
                    <label> Password </label>
                    <input type="password" placeholder="John@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label> Gender </label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label for="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                     <label> Active </label>
                     <select name="active" className="newUserSelect" id="active">
                         <option value="no">No</option>
                         <option value="yes">Yes</option>
                     </select>
                </div>
                <button className="newUsercreateButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
