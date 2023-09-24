import React from 'react';
import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined"

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true };
        this.delete = this.props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    checkboxEventHandler = () => {
        
        // this.state.item.done = !this.state.item.done;
        // this.setState(this.state);
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item: thisItem});
        console.log(this.state);
    }

    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly);
        this.setState({ readOnly: false }, () =>  {
            console.log("readOnly?", this.state.readOnly);
        });
        console.log(this.state);
    }

    enterKeyEventHandler = (e) => {
        if(e.key == "Enter") {
            this.setState( {readOnly: true} )
        }
    }
    editEventHandler = (e) => {
        // console.log(this.state);
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState( { item: thisItem });
        // console.log(this.state);
    }


    render() {
        const item = this.state.item;

        return (
            <ListItem>
                <Checkbox checked = { item.done } onClick={ this.checkboxEventHandler } />
                <ListItemText>
                    <InputBase
                        inputProps = {{
                                        'aria-label': 'naked',
                                        readOnly: this.state.readOnly,
                        }}
                        onClick={ this.offReadOnlyMode }
                        onChange={ this.editEventHandler }
                        onKeyPress={this.enterKeyEventHandler}
                        type = 'text'
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                        />
                </ListItemText>
                {/* 삭제버튼 */}
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo">
                        <DeleteOutlined onClick={ this.deleteEventHandler }/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default Todo;