import React from 'react';

const ClickedContext = React.createContext({
    home: true,
    documents: false,
    services: false,
    contact: false,
    photos: false,
    onClickHome: () => {},
    onClickDocuments: () => {},
    onClickServices: () => {},
    onClickContact: () => {},
    onClickPhotos: () => {},
})

export default ClickedContext;

export class ClickedProvider extends React.Component {
    state = {
        home: true,
        documents: false,
        services: false,
        contact: false,
        photos: false,
        drop: false,
    }

    onClickHome = () => {
        this.setState({
            home: true,
            documents: false,
            services: false,
            contact: false,
            photos: false
        })
    }

    onClickServices = () => {
        this.setState({
            home: false,
            documents: false,
            services: true,
            contact: false,
            photos: false
        }) 
    }

    onClickDocuments = () => {
        this.setState({
            home: false,
            documents: true,
            services: false,
            contact: false,
            photos: false
        }) 
    }

    onClickContact = () => {
        this.setState({
            home: false,
            documents: false,
            services: false,
            contact: true,
            photos: false
        }) 
    }

    onClickPhotos = () => {
        this.setState({
            home: false,
            documents: false,
            services: false,
            contact: false,
            photos: true
        }) 
    }

    render() {
        const value = {
            home: this.state.home,
            documents: this.state.documents,
            services: this.state.services,
            contact: this.state.contact,
            photos: this.state.photos,
            onClickHome: this.onClickHome,
            onClickDocuments: this.onClickDocuments,
            onClickServices: this.onClickServices,
            onClickContact: this.onClickContact,
            onClickPhotos: this.onClickPhotos,
        }

        return (
            <ClickedContext.Provider value={value}>
                {this.props.children}
            </ClickedContext.Provider>
        )
    }
}