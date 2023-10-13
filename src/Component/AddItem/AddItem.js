import React , {Component} from "react";
import './AddItem.css'

class AddItems extends Component{
    state = {
        name : '',
        age : ''
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    

    handleSubmit = (e)=> {
        // to stop refresh
        e.preventDefault();
        if(e.target.name.value !== '' && e.target.age.value){
            this.props.addItem(this.state);
            this.setState({
            name:'',
            age:''
        })
        }
        else{
            return false;
        }

    }





    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="Enter Name...." 
                    id="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    />

                    <input type="number" 
                    placeholder="Enter Age...."
                    id="age"
                    onChange={this.handleChange}
                    value={this.state.age}
                    />

                    <input type="submit"  value="Add"/>
                </form>
            </div>
        )
    }
}
export default AddItems;