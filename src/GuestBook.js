import React from "react";

class GBForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        author: 'Your name',
        message: 'Your comment'
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
        //console.log(target.value);
      }body
  
    handleSubmit(event) {
        fetch('https://portfolio-obedsamuel.herokuapp.com/api/addcomment',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({author: this.state.author, message: this.state.message})
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })

      alert('A message by: ' + this.state.author + ' has been posted and it contained: ' + this.state.message);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <h4>Wanna post message in my Guestbook? Type your name and Message Below</h4><br/>
        <form onSubmit={this.handleSubmit}>
        <label ><span>What's your first name?</span></label>
        <input type="text" name="author" class="question" id="nme" required autoComplete="off"   value={this.state.value} onChange={this.handleInputChange} />
        
        <br />
        <label ><span>Type your message here</span></label>
         <textarea name="message" rows="2" class="question" id="msg" required autoComplete="on" value={this.state.value} onChange={this.handleInputChange} ></textarea>
         <br/>
         <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default GBForm;