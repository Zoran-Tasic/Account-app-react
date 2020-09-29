import React, { Component } from 'react';
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

class App extends Component {
    state = {
        accounts: [
            { id: 1, name: "Zoran", lastname: "Tasic", phone: "11 - 22 - 33", email: "tasic@gmail.com" },
            { id: 2, name: "Mita", lastname: "Mitic", phone: "99 - 55 - 77", email: "mita@gmail.com" }
        ]
    }

    addNewAccountToState = (acc) => {
        this.setState({
            accounts: [...this.state.accounts, acc]
        })
    }

    deleteAccount = (id) => {
        const accountsCopy = [...this.state.accounts];
        const newCopyAccounts = accountsCopy.filter(account => account.id !== id);
        this.setState({ accounts: newCopyAccounts });

    }

    editAccount = (acc) => {
        const copyAccounts = [...this.state.accounts];
        let accountPossition = copyAccounts.map(account => account.id).indexOf(acc.id)
        copyAccounts[accountPossition] = acc;
        this.setState({ accounts: copyAccounts })
    }

    render() {
        return ( <
            BrowserRouter >
            <
            Header / >
            <
            Route path = "/"
            exact >
            <
            AccountsTable accounts = { this.state.accounts }
            / > < /
            Route >
            <
            Route path = "/add" >
            <
            AddAccount addNewAccountToState = { this.addNewAccountToState }
            / > < /
            Route >
            <
            Switch >
            <
            Route path = "/edit/:id" >
            <
            EditAccount accounts = { this.state.accounts }
            editAccount = { this.editAccount }
            / > < /
            Route > <
            Route path = "/edit" >
            <
            EditTable accounts = { this.state.accounts }
            deleteAccount = { this.deleteAccount }
            / > < /
            Route >
            <
            /Switch> < /
            BrowserRouter >
        )
    }
}

export default App;