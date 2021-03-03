import React from "react";
import { v4 as uuidv4 } from "uuid";
import ChirperItem from "./components/ChirperItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            author: "",
            listOfChirps: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ 
                listOfChirps: [...this.state.listOfChirps, 
                        // { id: uuidv4(), listOfChirps: "Inital loaded task" },
                        // { id: uuidv4(), listOfChirps: "Inital loaded task two" },
                        // { id: uuidv4(), listOfChirps: "Inital loaded task three" }
                        { id: uuidv4(), message: "Inital loaded task", author: "Beyonce" },
                        { id: uuidv4(), message: "Inital loaded task two", author: "Jay Z"  },
                        { id: uuidv4(), message: "Inital loaded task three", author: "Will Smith"  }
                ]
            });
        }, []);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ 
            message: "", 
            author: "",
            listOfChirps: [...this.state.listOfChirps, { id: uuidv4(), message: this.state.message }] 
        });
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <h1>Classy Chirper</h1>
                        <h4>Chirper Part Deuce</h4>

                        <form className="form-group">
                            <label>Message: </label>
                            <input 
                                value={this.state.message} 
                                onChange={event => this.setState({ message: event.target.value })} 
                                className="form-control"
                                placeholder="What would you like to chirp?"    
                            />
                            <button onClick={event => this.handleSubmit(event)} className="btn btn-primary mt-3">
                                Post this Chirp
                            </button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {this.state.listOfChirps.map(listOfChirps => (
                                // <li className="list-group-item" key={`todo-task-${todo.id}`}>{todo.task}</li>
                                <li className="list-group-item" key={`listOfChirps-message-${listOfChirps.id}`}>{listOfChirps.message}</li>
                                // <ChirperItem key={`listOfChirps-message-${listOfChirps.id}`} message={message} />
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        );
    };
};

export default App;