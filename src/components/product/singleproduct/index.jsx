import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import "./index.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const singleProduct = (props) => {
  const { match } = props;
  console.log(match.params.id);
  const getModalData = () => {
    switch (match.params.id) {
      case "1":
        return (
          <div className="caseOneContainer">
            <Grid container>
              <Grid item xs={12} md={12} className="modalData">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Belt Conveyors</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Fécond™ Belt conveyor systems are designed for versatility
                      to suit a multitude of industries, process operations,
                      production lines and applications. Belt conveyor systems
                      manufactured us by are the preferred solution when
                      reliability, adaptability and value are important. Our
                      experts can assist to determine the correct model, speeds
                      and power for the machine you require. We have a range of
                      systems to suit every industry. Our belt conveyor width
                      ranges from 40mm to 1000mm and speed up to 48
                      meters/minute.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Benifits Including</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem>
                        Cost Effective — Because manufacturing is undertaken in
                        house our conveyors provide excellent value for money.{" "}
                      </ListItem>
                      <ListItem>
                        Versatility in Design – We can offer you customized
                        version in all models to match your exact requirement{" "}
                      </ListItem>
                      <ListItem>
                        Smooth and Quiet running — this conveyor will move
                        materials will ease. Its simplistic style is quiet and
                        smooth, moving products to the required destination.
                      </ListItem>
                      <ListItem>
                        Self-Tracking — Our unique design provides for the
                        system to be self-tracking thus eliminating countless
                        maintenance issues for the end user.
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </div>
        );
      case "2":
        return (
          <div className="caseTwoContainer">
            <Grid container>
              <Grid item xs={12} md={12}>
                <List>
                  <ListItem>
                    Fécond™ manufacture a wide range of Roller Conveyor to suit
                    most applications. We utilize the best of components in our
                    manufacturing. Bearings, roller chains and geared motors are
                    of highest quality, ensuring long trouble free life. Rollers
                    from 32mm to 89mm diameter are available in our systems to
                    suit various chain pitches with respect to application
                  </ListItem>
                  <ListItem>
                    All our conveyors are supplied in modules. Standard lengths
                    of 1500mm and 3 meters are the normal, however other lengths
                    are able to be supplied. Conveyors come with heavy duty leg
                    assemblies. Using RHS supports. Adjustable plates are
                    supplied to allow for uneven floor surfaces or decline
                    applications
                  </ListItem>
                  <ListItem>
                    We also off Powered Roller Curve Conveyor to suit critical
                    transfer angles with other types of conveyors, a full range
                    of product exists. Corners, merges, junctions, transfers,
                    cross overs are available.
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      case "3":
        return (
          <div className="caseThreeContainer">
            <Grid container>
              <Grid item xs={12} md={12}>
                <List>
                  <ListItem>
                    We also offer Varity of Gravity roller conveyor, Gravity
                    Roller conveyor is normally used where the cost of powered
                    conveyor is generally unjustifiable and where the use of
                    free gravity forces will allow the product to move freely
                    along the conveyor
                  </ListItem>
                  <ListItem>
                    Skate wheel conveyor is available in either straight or
                    curved sections. We supply single or staggered track Skate
                    wheel conveyor in both light duty (plastic skate) and medium
                    duty (steel skate). Skate wheel conveyor is used to
                    transport product in bags, cartons and very lightweight
                    items
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      case "4":
        return (
          <div className="caseFourContainer">
            <Grid container>
              <Grid item xs={12} md={12} className="modalData">
                <p>
                  Slat conveyors suit a wide variety of applications. Fécond™
                  offers two types of slat chain conveyors:
                </p>
                <List>
                  <ListItem>
                    {" "}
                    Low Profile – Suitable for light to medium weight products
                    (up to 1-3kg each) and of width up to 200mm and further
                    offered in two types straight running and side flexing
                  </ListItem>
                  <ListItem>
                    Heavy Duty – Heavy Duty Slat Chain Conveyors are fitted with
                    fabricated slat and used for assembly line and heavy
                    products, bag transfers up to 100kg
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={12}>
                <p>Slat Conveyor comes with various option few listed below</p>
                <List>
                  <ListItem>Curves</ListItem>
                  <ListItem>
                    SS304 / Heavy Duty Plastic / Fabricated slat chain
                  </ListItem>
                  <ListItem>Adjustable guide rails</ListItem>
                  <ListItem>Fixed or adjustable legs</ListItem>
                  <ListItem>
                    Various chain types including plastic, stainless steel,
                    anti-static and high grip varieties
                  </ListItem>
                  <ListItem>Product sensors</ListItem>
                  <ListItem>CIP and wash down systems</ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      case "5":
        return (
          <div className="caseFiveContainer">
            <Grid container>
              <Grid item xs={12} md={12} className="modalData">
                <p>
                  Fécond™ manufactures custom modular plastic belt conveyors for
                  applications that require sanitary conditions for food or
                  pharmaceutical processing. Our plastic modular conveyors can
                  be custom designed to meet your exact processing requirements
                  and are available in a wide variety of configurations. We
                  offer modular conveyors in radius, straight, incline, decline
                  and combined configurations that meets your production
                  requirements, allowing your line to move smoothly and
                  efficiently.
                </p>
              </Grid>
              <Grid item xs={12} md={12}>
                <p>Features of our custom plastic belt conveyors include:</p>
                <List>
                  <ListItem>
                    Light and heavy duty configurations to handle small products
                    such as vials to large containers filled with heavy liquids
                  </ListItem>
                  <ListItem>
                    High quality plastic belting, including plastic chain, solid
                    plastic belt and open grid plastic belt
                  </ListItem>
                  <ListItem>
                    Variety of drives to provide the speed or speeds required
                    for your process line
                  </ListItem>
                  <ListItem>
                    Variety of guiderail options to keep products upright and in
                    proper position
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      case "6":
        return (
          <div className="caseSixContainer">
            <Grid container>
              <Grid item xs={12} md={12} className="modalData">
                <p>
                  These type conveyors are a useful belt over deck or belt on
                  roller conveyor that will handle virtually all conveyable
                  products. These units are ideal for truck unloading & loading
                  and warehouse applications. We use a rough top belt that
                  provides maximum grip of product.
                </p>
                <p>
                  A hydraulic power pack and pump enables quick elevation
                  change. These conveyors are pre-wired in our factory with
                  start/stop, forward and reverse switching option and emergency
                  stop push buttons, extension lead and suitable plug.
                </p>
                <p>
                  These conveyors are an ideal companion with our flexible
                  conveyor FUL – SKL series for vehicle unloading or for areas
                  with raised storage.
                </p>
              </Grid>
            </Grid>
          </div>
        );
      case "7":
        return (
          <div className="caseSevenContainer">
            <Grid container>
              <Grid item xs={12} md={12}>
                <List>
                  <ListItem>
                    These conveyor system is designed to reduce costs associated
                    with loading and unloading trucks and shipping containers.
                    They will speed up operations normally carried out over many
                    hours using manual labour. The time and labour Involved in
                    manual handing operations can place an unnecessary burden on
                    resources which could be better utilized in a more
                    profitable way.
                  </ListItem>
                  <ListItem>
                    Loose stacked dispatch applications are made easier and
                    safer and eliminates the need for a forklift in unloading
                    operations. FUL TBC series conveyors will ensure turnaround
                    times and stock processing are quicker and more efficient
                    and enable a quick return on Investment at the same time.
                  </ListItem>
                  <ListItem>
                    FUL – TBC series telescopic operation is sensor controlled
                    and optional wireless mode is available for trouble free
                    operation. We offer FUL – TBC series in two types
                  </ListItem>
                  <List>
                    <ListItem>Double Stage</ListItem>
                    <ListItem>Triple Stage</ListItem>
                  </List>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      case "8":
        return (
          <div className="caseEightContainer">
            <Grid container>
              <Grid item xs={12} md={12} className="modalData">
                <p>
                  Skate wheel conveyors are supplied with either 50mm steel or
                  plastic skates (in a staggered pattern), depending on the
                  application. Steel skates are used in high impact applications
                  whereas plastic skates are more suitable for light product
                  handling.
                </p>
                <p>
                  Skates ensure true product tracking and are suited to lighter
                  loads, such as cartons, and flat bottomed objects and
                  multi-wall bags in some applications. Roller or Skate wheel
                  conveyors can turn 180 degrees over a bigger radius. They
                  retract into a small size for easy storage when not in use.
                  Available in 2 Module, 4 Module & 6 Module.
                </p>
              </Grid>
            </Grid>
          </div>
        );
      case "9":
        return (
          <div className="caseNineContainer">
            <Grid container>
              <Grid item xs={12} md={12}>
                <List>
                  <ListItem>
                    Power Turn Conveyors is used for turning unit loads within a
                    continuous system or transport flow. FPT series ensures high
                    speed, lower energy consumption, extremely quiet operation
                    and reduced maintenance. The design resolves issues related
                    to tracking inward. It also ensure that product maintains
                    orientation throughout the curve
                  </ListItem>
                  <ListItem>
                    All components run in harmony with rolling components in
                    lieu of sliding components where practical, thus reducing
                    wear and energy usage. FPT series consists of standardized
                    components which are manufactured and tailored to the
                    customer‘s requirements. Component selection is driven by
                    the lowest power consumption and the longest life. This
                    results in a very efficient, highly reliable, and low cost
                    of ownership.
                  </ListItem>
                  <ListItem>
                    Various radii, widths, angles, heights, speeds and belting
                    materials are available to meet your specific application.
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      case "10":
        return (
          <div className="caseTenContainer">
            <Grid container>
              <Grid item xs={12} md={12}>
                <List>
                  <ListItem>
                    Suitable for packages, boxes, and carton goods
                  </ListItem>
                  <ListItem>Bi directional flow</ListItem>
                  <ListItem>
                    Improves material handling operations by increasing the
                    speed of vertical transport from one floor to other floor or
                    from one conveyor height to another.
                  </ListItem>
                  <ListItem>
                    Space saving: Footprint is considerably smaller than that
                    taken by an incline conveyor and provides a reliably long
                    service-life
                  </ListItem>
                  <ListItem>
                    Three-sided access allows planning for multiple in-feed
                    locations which helps in enhance overall throughput in your
                    operations
                  </ListItem>
                  <ListItem>
                    FVS series is a great match for use with automated conveyor
                    systems
                  </ListItem>
                  <ListItem>Delivery Height is Limited UP to 8 meters</ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      case "11":
        return (
          <div className="caseElevenContainer">
            <Grid container>
              <Grid item xs={12} md={12}>
                <List>
                  <ListItem>
                    Well-suited for the QC requirements in the food,
                    pharmaceuticals, ware housing & logistics
                  </ListItem>
                  <ListItem>
                    Highly Versatility: Easily adopts with existing packing /
                    Processing line
                  </ListItem>
                  <ListItem>
                    Advanced Control panel with 7/10 inch touch screen control
                    and future ready automation options
                  </ListItem>
                  <ListItem>
                    3 Step Quick calibration and Easy maintenance
                  </ListItem>
                  <ListItem>
                    Fully customized GUI as per client requirement
                  </ListItem>
                  <ListItem>
                    Smart Mode: Different type of products can be weighed
                    without Changing recipe by special customization (Optional)
                  </ListItem>
                  <ListItem>
                    Product counting, Weight data acquisition, online printing
                    can be done
                  </ListItem>
                  <ListItem>
                    Stand-alone data acquisition / Data acquisition to PC or ERP
                    or SAP
                  </ListItem>
                  <ListItem>
                    Completely tailor made based on process /packing environment
                  </ListItem>
                  <ListItem>
                    Different types of rejection/sorting mechanism available
                  </ListItem>
                  <List>
                    <ListItem>Pneumatic Pusher (Standard)</ListItem>
                    <ListItem>Paddle Sorter</ListItem>
                    <ListItem>Air Blower</ListItem>
                    <ListItem>Luffing Conveyor</ListItem>
                  </List>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      case "12":
        return (
          <div className="caseTwelveContainer">
            <Grid container>
              <Grid item xs={12} md={12} className="modalData">
                <p>
                  Fecond™ has extensive experience in providing industrial
                  automation solutions at all scales and across diverse
                  industries. Our automation solutions are a one-stop, full
                  service; from engineering design to installation and all steps
                  in between. We are experienced with a wide range of
                  technologies and our industrial automation services include:
                </p>
              </Grid>
              <Grid item xs={12} md={12}>
                <List>
                  <ListItem>
                    Automated Line Control of materials handling system
                  </ListItem>
                  <ListItem>
                    Design, Build, Install, Program and Service Machinery and
                    Industrial Systems
                  </ListItem>
                  <ListItem>
                    Project Management of your automation implementation
                  </ListItem>
                  <ListItem>
                    Retrofitting or upgrading existing equipment with new
                    automation technologies
                  </ListItem>
                  <ListItem>
                    PLC programming from simple controllers to factory-scale
                    systems
                  </ListItem>
                  <ListItem>
                    HMI/SCADA systems: machine based to factory-scale systems
                    and reporting
                  </ListItem>
                  <ListItem>
                    Machine to Machine data connections (Internet of Things)
                  </ListItem>
                  <ListItem>
                    Provision of Documentation including Functional
                    Specifications, Operator Manuals, CAD Drawings and Safety
                    Documentation
                  </ListItem>
                  <ListItem>
                    Contract staff for Mechanical or Electrical / Automation
                    Engineering requirements
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={12}>
                <p>
                  We offer expertise in PLC Programming, HMI and SCADA via
                  technologies such as programmable logic controllers (PLCs) and
                  human machine interfaces (HMIs) from many brands. Our services
                  extend across a wide range of sophisticated applications
                  including:
                </p>
                <List>
                  <ListItem>line control</ListItem>
                  <ListItem>motion control</ListItem>
                  <ListItem>machine vision</ListItem>
                  <ListItem>MES (Machine Execution Systems)</ListItem>
                  <ListItem>other sensing technologies</ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        );
      default:
        return "foo";
    }
  };
  return (
    <div className="singleProductContainer">
      <div className="singleProductBody">
        <div className="singleProductImgContainer">
          <div className="singleProductHeader">
            <h1>Heading</h1>
            <h5>SubHeading</h5>
          </div>
          {/* <div className="breakline"></div> */}
        </div>
        <div className="singleProductDataContainer">{getModalData()}</div>
      </div>
    </div>
  );
};

export default singleProduct;
