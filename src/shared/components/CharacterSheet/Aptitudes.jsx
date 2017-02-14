import React from 'react';
import Input from '../Form/Input';
import Column from '../Grid/Column';
import Validate from '../../functions/Validate';

const Aptitudes = React.createClass
(
    {
        propTypes: {
            aptitudes: React.PropTypes.array.isRequired,
        },

        render() {
            let v = new Validate();

            return (
                <Column columns="eight">
                    {this.props.aptitudes.map((apt) => {
                        return (
                            <Input
                                key={apt.id}
                                className="atr-input"
                                type="number"
                                name={apt.name}
                                labelValue={apt.name.toUpperCase()}
                                validation={v.isBetweenZeroAndThirty}
                                initial={{value: 0}}
                                ref={'i-' + apt.id}
                            />
                        );
                    })}

                </Column>
            );
        },

        getInputs() {
            let inputs = {};

            for (let key in this.refs) {
                if (this.refs.hasOwnProperty(key)) {
                    let apt = this.refs[key];

                    inputs[apt.props.name] = apt.getValue();
                }
            }

            return inputs;
        }
    }
);

export default Aptitudes;