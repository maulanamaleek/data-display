import React, { Component } from 'react'
import { CircularChart, FloatingMenu, HorizontalChart, Table, VerticalChart } from '../../components'
import './style.scss'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            selected: 0,
            showFloatingMenu: false,
            data_1: [
                ["May", 5],
                ["Apr", 3],
                ["Mar", 6],
                ["Feb", 3.5],
                ["Jan", 5.5],
            ],
            data_2: [
                ['1', 138],
                ['1', 138],
                ['1', 110],
                ['1', 114],
                ['1', 157],
                ['2', 176],
                ['1', 162],
                ['1', 114],
                ['1', 110],
                ['2', 132],
                ['1', 110],
            ],
            data_3: {
                progress: 70,
                text_1: 210,
                text_2: 40
            },
            table: [
                {
                    title: 'Table 01',
                    category: 'Category 01',
                    available: 'Available',
                    arrive: 'Arrived',
                },
                {
                    title: 'Table 02',
                    category: 'Category 01',
                    available: 'FULL',
                    arrive: 'Hasn\'t Arrived',
                },
                {
                    title: 'Table 03',
                    category: 'Category 01',
                    available: 'Available',
                    arrive: 'Arrived',
                },
                {
                    title: 'Table 04',
                    category: 'Category 01',
                    available: 'Full',
                    arrive: 'Arrived',
                },
            ]
        }

        this.onCheck = this.onCheck.bind(this)
        this.toggleFloatMenu = this.toggleFloatMenu.bind(this)
        this.checkAllTable = this.checkAllTable.bind(this)
        this.deleteSelected = this.deleteSelected.bind(this)
    }

    onCheck(e) {
        const {selected} = this.state;
        if (e.target.checked){
            this.setState({selected: selected + 1, showFloatingMenu: true})
        } else {
            this.setState({selected: selected - 1, showFloatingMenu: true})
        }
    }

    checkAllTable(e) {
        const list = document.querySelectorAll('.tbl-check')
        if (e.target.checked) {
            list.forEach(item => {
                item.checked = true
            })
            this.setState({selected: list.length, showFloatingMenu: true})
        } else {
            list.forEach(item => {
                item.checked = false
            })
            this.setState({selected: 0, showFloatingMenu: false})
        }
    }

    toggleFloatMenu() {
        this.setState({ showFloatingMenu: !this.state.showFloatingMenu})
    }

    deleteSelected() {
        const list = document.querySelectorAll('.table-card')

        list.forEach(item => {
            if (item.childNodes[0].childNodes[0].checked) {
                item.remove()
                console.log('checked')
            }
        });

        this.setState({selected: 0})
    }

    render() {
        const { data_1, data_2, data_3, selected, table, showFloatingMenu} = this.state;
        return (
            <div className="home">
                <h1 className="page-title">Charts and Table Visualization</h1>
                <div className="charts-list">
                    <HorizontalChart data={data_1} title="Chart 1" />
                    <VerticalChart data={data_2} title="Chart 2" />
                    <CircularChart data={data_3} title="Chart 3" />
                </div>
                <Table check={this.onCheck} data={table} checkAll={this.checkAllTable} />
                <FloatingMenu deleteItem={this.deleteSelected} isShow={showFloatingMenu} toggle={this.toggleFloatMenu} selected={selected} />
            </div>
        )
    }
}
