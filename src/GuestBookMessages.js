import React , {Component} from "react";


const API = 'https://portfolio-obedsamuel.herokuapp.com/api/getcomment'

class Messages extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          author : [], 
          comment : []

        };
      }
      componentDidMount() {
        //Before fetch it shows loading 
        this.setState({isLoading:true});
        fetch(API)
          .then(response => {
            // if reponse is fine 
            if(response.ok){
              return response.json();
              console.log(response.json());
            } else{
              throw new Error('Something went wrong.');
            }
          })
          .then((json) => {
            let messages = json.rows.map(rows => rows)
            this.setState({ author: json.rows[1], comment: json.rows[1], isLoading: false })

            // var userData = json.rows
            console.log(json.rows);
            // const messages = userData.map(x => x);
            // console.log(messages);
            // data => this.setState({ author: messages, comment: messages, isLoading: false })
          })
          // .then(data => this.setState({ author: userData, comment: data.userData, isLoading: false })         
          
          // )
          
         
          .catch(error => this.setState({error, isLoading: false}));
      }
    render() {
      const { author, comment, isLoading, error } = this.state;
      
      let center = {
        textAlign: "center"
      }
      if(error){
        return <p>Problem with fetch</p>
      }
      if(isLoading){
        return <p>Loading...</p>
      }
        return (
          <div className="flex">
              
              <div className ="flex-column wView">                
              </div>
              <div className="flex-column wReport center">
                <div>

                  <p>Name: {author.author}</p>
                  <p>Comment: {comment.message}</p>
              
                </div>
              </div>                           
          </div>
        );
    }
}

export default Messages;