import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { poke: { id, name, type, averageWeight: { value, measurementUnit }, image } } = this.props;
    return (
      <article>
        <h4>{name}</h4>
        <h4>{type}</h4>
        <h4>{`Average wait: ${value} ${measurementUnit}`}</h4>
        <img src={image} alt={`Foto do pokemon ${name}`} />
      </article>
    )
  }
}

export default Pokemon;