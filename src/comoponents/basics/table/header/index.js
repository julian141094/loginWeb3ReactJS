import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const qtysBackup = [10, 15];

const Index = ({
  qtys = qtysBackup,
  title,
  total,
  hideheader = false,
  customsearchtext = "Search",
  updatefilter,
  filtercomponent,
  updateselect,
}) => {
  return !hideheader ? (
    <Container fluid>
      <Row className={"py-4"}>
        <Col
          xs={12}
          md={6}
          className={"d-flex align-items-center justify-content-start"}
        >
          {title}
        </Col>
        <Col
          xs={12}
          md={6}
          className={"d-flex align-items-center justify-content-end"}
        >
          {filtercomponent === undefined ? (
            <>
              <span>{customsearchtext}</span>
              <div className={"px-3"} style={{ maxWidth: 200 }}>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=""
                  onChange={(event) =>
                    updatefilter
                      ? updatefilter(event.currentTarget.value)
                      : null
                  }
                />
              </div>
            </>
          ) : (
            filtercomponent
          )}
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={"border px-4"} />
      </Row>
      <Row className={"py-4"}>
        <Col
          xs={12}
          md={6}
          className={"d-flex align-items-center justify-content-start"}
        >
          <span>See</span>
          <div className={"px-3"}>
            <Form.Select
              disabled
              size="sm"
              aria-label="cantidad"
              // value={userSelect}
              onChange={(event) =>
                updateselect ? updateselect(event.target.value) : null
              }
            >
              {qtys.map((item, index) => (
                <option key={`qty-item-${index}`} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </div>
          <span></span>
        </Col>
        <Col
          xs={12}
          md={6}
          className={"d-flex align-items-center justify-content-end"}
        >
          <span>Quantity of {title}</span>
          <div className={"px-3"} style={{ maxWidth: 100 }}>
            <Form.Control
              disabled
              readOnly
              size="sm"
              type="text"
              value={total}
            />
          </div>
        </Col>
      </Row>
    </Container>
  ) : null;
};

export default Index;
