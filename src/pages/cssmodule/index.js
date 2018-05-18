import React, { Component } from 'react';
import { Col, Card, Row } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import styles from './index.module.less';
console.log(styles)

class Cssmodule extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first="cssModule" />
                <Row gutter={16}>
                    <Col md={24}>
                        <Card title="cssModule" bordered={false}>
                            <div className="header">
                                <p>Hello CssModule</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cssmodule;