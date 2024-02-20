import React, { Component } from 'react';

class Feed extends Component {

    render() {
        return (
            <div>
                <div key={this.props.id}>
                    <h3>{this.props.username}</h3>
                    <a>{this.props.curtidas} {this.props.curtidas <= 1 ? ' Curtoda' : ' Curtidas'} /
                        {this.props.comentarios} {this.props.comentarios <= 1 ? ' Comentário' : ' Comentários'}
                    </a>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Feed;