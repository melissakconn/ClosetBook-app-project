import React from 'react';
// import IMG from './imgs/jeans.jpg'


export default class extends React.Component{
    render(){
        const data = this.props.info

        return(
            <div className="main-template" >
                <div className="picture-container" >
                    <img className="picture-style" src={data.picture} alt="abc"/>
                </div>


                <div className="text-container" >
                    <div><strong>Name: </strong>{data.name}</div>

                    <div><strong>Categories: </strong>{data.category}</div>
                    <div><strong>Description: </strong>{data.description}</div>
                    <div><strong>Edit: </strong>link</div>
                    <div><strong>ID: </strong></div>{data.id}</div>


            </div>
        )
    }



}


//
//
// category
//     :
//     "tops"
// description
//     :
//     "black bomber jacket"
// id
//     :
//     "cjh3vjgp2wc240b81cc0kks70"
// name
//     :
//     "jacket"
// picture
//     :
//     "https://github.com/melissakconn/projectphotos/blob/master/tops/jacket.png"
// Symbol(id)
// :
// "Item:cjh3vjgp2wc240b81cc0kks70"

