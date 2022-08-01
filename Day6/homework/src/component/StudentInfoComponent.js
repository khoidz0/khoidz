import { Component } from 'react';


class StudentInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [
                { id: 1, name: 'chienmakao' , age: 45, email: 'chienmakao@gmail.com' },
                { id: 2, name: 'chienmakao1', age: 46, email: 'chienmakao@gmail.com' },
                { id: 3, name: 'chienmakao2', age: 47, email: 'chienmakao@gmail.com' },
                { id: 4, name: 'chienmakao3', age: 48, email: 'chienmakao@gmail.com' }
            ]
        }
    }


    renderTable() {
        return this.state.student.map((students, index) => {
            const { id, name, age, email } = students
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    renderHeader() {
        const header = Object.keys(this.state.student[0])
        return header.map(( key , index) => <th key={index}>{key.toUpperCase()}</th>)
    }

    render() {
        return (
            <div class="container">
                <table class="table table-striped table-bordered">
                    <tbody>
                       <tr>{this.renderHeader()}</tr>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )

    }
}

export default StudentInfoComponent