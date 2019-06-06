import React, { Component, Fragment } from 'react';
import Post from './Post';


class Posts extends Component {
  state = {
    posts: [
      {
        id: '1',
        title: 'Sura Al-Baqarah, Ayah 89',
        body: 'And when there came to them a Book from Allah confirming that which was with them - although before they used to pray for victory against those who disbelieved - but [then] when there came to them that which they recognized, they disbelieved in it; so the curse of Allah will be upon the disbelievers.'
      },
      {
        id: '2',
        title: 'Sura Al-Baqarah, Ayah 106',
        body: 'We do not abrogate a verse or cause it to be forgotten except that We bring forth [one] better than it or similar to it. Do you not know that Allah is over all things competent?'
      },
      {
        id: '3',
        title: 'Sura Al-Baqarah, Ayah 107',
        body: 'Do you not know that to Allah belongs the dominion of the heavens and the earth and [that] you have not besides Allah any protector or any helper?'
      }
    ]
  }
  render () {
    const posts = !!this.state.posts.length ? (
    <Fragment>
        <h1 className='center white-text'>ALL POSTS </h1>
        {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </Fragment>
    ) : 
    
    (
    <Fragment>
        <h1 className='center'>No POST yet!... </h1>
      </Fragment>
    );
    return (posts) 
  }
}

export default Posts;
