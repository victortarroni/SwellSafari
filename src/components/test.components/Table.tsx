import Table from 'react-bootstrap/Table';
import './Table_style.css'

function WeatherTable() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th className='head-timer'>06h</th>
          <th className='head-timer'>12h</th>
          <th className='head-timer'>15h</th>
          <th className='head-timer'>18h</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='six-wave'></td>
          <td className='twelve-wave'></td>
          <td className='three-wave'></td>
          <td className='eighteen-wave'></td>
        </tr>
        <tr>
          <td className='six-tide'></td>
          <td className='twelve-tide'></td>
          <td className='three-tide'></td>
          <td className='eighteen-tide'></td>
        </tr>
        <tr>
        <td className='six-wind'></td>
          <td className='twelve-wind'></td>
          <td className='three-wind'></td>
          <td className='eighteen-wind'></td>
        </tr>
        <tr>
        <td className='six-temp'></td>
          <td className='twelve-temp'></td>
          <td className='three-temp'></td>
          <td className='eighteen-temp'></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default WeatherTable;