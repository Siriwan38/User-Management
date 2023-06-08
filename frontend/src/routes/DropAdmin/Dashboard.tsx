import Toast from 'react-bootstrap/Toast';

function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">CAI</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>งานเสร็จยังคะ.</Toast.Body>
    </Toast>
  );
}

export default BasicExample;