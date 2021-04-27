import React from "react";
import Modal from "./Modal"
import { Component } from 'react';

type TaskPassback = {
  title: string;
  description: string;
  priority: priority;
}

type priority = "normal" | "important" | "urgent";
type HeaderProps = {
  addColumn: () => void;
  addTask: (taskInstance?: TaskPassback) => void;
};

type State = {
  show: boolean
  titleVar: string,
  descVar: string,
  prioVar: 'normal'|'important'|'urgent',
};



class Header extends React.Component<HeaderProps, State>{
constructor(props: HeaderProps) {
  super(props);
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  
  this.state = {
    show: false,
    titleVar: "",
    descVar: "",
    prioVar: 'normal'
  };
}


showModal = () => {
  this.setState({ show: true });
};

hideModal = () => {
  this.setState({ show: false });
};

handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  const target = event.target.id
  if (target === "titleInput"){
    let hold = this.state.titleVar
    this.setState({titleVar: event.target.value})
  }
  if (target === "descInput"){
    let hold = this.state.descVar
    this.setState({descVar: event.target.value})
  }
}

handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>){
  
  event.target.value === 'normal' ? this.setState({prioVar: 'normal'})
  : event.target.value === 'important' ? this.setState({prioVar: 'important'})
  : this.setState({prioVar: 'urgent'})

}


render(){
  return (
    
    <div className="header" style={{  height: 60 }}>
      <h1
        style={{
          float: "left",
          margin: 0,
          padding: 0,
          verticalAlign: "center",
        }}
      >
        Kango Bango
        </h1>
      <Modal show={this.state.show} handleClose={this.hideModal}>
        
          <label> Title: 
            <input type="text" id="titleInput" value={this.state.titleVar} onChange={this.handleInputChange} />
          </label>
          <br/>
          <label> Description: 
            <input type="text" id='descInput' value={this.state.descVar} onChange={this.handleInputChange} />
          </label>
          
          <br/>
          <label> Priority: 
            <select value={this.state.prioVar} onChange={this.handleSelectChange}>
            <option value='normal'>Normal</option>
            <option value='important'>Important</option>
            <option value='urgent'>Urgent</option>
            </select>
          </label>

          <button onClick={() => this.props.addTask({title: this.state.titleVar, description: this.state.descVar, priority: this.state.prioVar})}> AHHHHH </button>


        
      </Modal>
      <button onClick={this.showModal}> Add task </button>
      <button onClick={this.props.addColumn}> Add column </button>
      
    
    </div>

  );
};
}
export default Header;
