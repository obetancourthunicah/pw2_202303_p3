import { Card } from './Card';


export default {
    component: Card,
}


export const FirstStory = {
    args: {
        title: 'Card title',
        description: 'Card description',
        image: 'https://picsum.photos/seed/picsum/200/300',
        onClick: () => { alert("You Clicked Me.") }
    },
  };

  export const SecondStory = {
    args: {
        title: 'New Kid on the Block',
        description: 'Music albun first on its kind using auto-tune technology',
        image: 'https://picsum.photos/seed/picsum/200/300',
        onClick: () => { alert("You Clicked Me 2.") }
    },
  };