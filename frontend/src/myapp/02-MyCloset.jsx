import React from "react";
import gql from "graphql-tag"
import { client } from './endpoint/endpoint.js'

class Page extends React.Component{

    state = { name: "", category: "", description: "", picture: "" }

    render() {

        const datatodb = async () => {
            console.log("hello")
            console.log(this.state)

                let temp1 = await client.mutate({
                    mutation: gql`
                        mutation{
                            createItem(data: {
                                name: "${this.state.name}",
                                category: "${this.state.category}",
                                description: "${this.state.description}",
                                picture: "${this.state.picture}?raw=true"
                            } ){
                                id
                                name
                                category
                                description
                                picture
                            }
                        }
                    `}).then((result) => { return result.data.createUser } )

                await console.log("La Data: ", temp1 )
                await this.setState({ name: '', category: '', description: '', picture: '' })
        }

        return(
            <div>
                <h1>MyCloset</h1>

                {/*<input type="text"/>*/}
                {/*<button>Search</button>*/}
                {/*<hr/>*/}
                {/*<p>things are going here</p>*/}


                <div>name</div>
                <input type="text" value={ this.state.name } onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                <br/><br/>

                <div>category</div>
                <input type="text" value={ this.state.category } onChange={ (e) => { this.setState({ category: e.target.value }) } } />
                <br/><br/>

                <div>description</div>
                <input type="text" value={ this.state.description } onChange={ (e) => { this.setState({ description: e.target.value }) } } />
                <br/><br/>

                <div>picture</div>
                <input type="text" value={ this.state.picture } onChange={ (e) => { this.setState({ picture: e.target.value }) } } />
                <br/><br/>

                <button onClick={datatodb} >submit</button>



            </div>
        )
    }
}

export default Page;
