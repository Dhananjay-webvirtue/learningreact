import React from 'react';

class Artist extends Component {
    render() {
        return (
            <span>Artist name: {this.props.name}</span>
        );
    }
}

export default Artist;
