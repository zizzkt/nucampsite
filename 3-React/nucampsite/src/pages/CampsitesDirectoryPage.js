import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsitebyid} from "../features/campsites/campsitesSlice";

const CampsitesDirectoryPage = () => {
  const [campsitebyid, setCampsiteid] = useState(0);
  const selectedCampsite = selectCampsitebyid(campsitebyid);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <CampsitesList setCampsiteid={setCampsiteid} />
        </Col>
        <Col sm="7" md="5">
          <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsitesDirectoryPage;
