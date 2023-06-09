import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <div style={{ margin: '0 auto', width: '80px' }}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}
