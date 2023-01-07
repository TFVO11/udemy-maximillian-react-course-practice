import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className = {classes}>{props.children}</div>;
}
//props.children으로 Card태그 내의 값을 전부 가져왔다.
//{}위치를 받기 위해 쓴거다.
export default Card;
