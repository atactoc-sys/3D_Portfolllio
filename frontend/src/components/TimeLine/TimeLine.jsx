import React from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EventIcon from "@mui/icons-material/Event"; // Updated import
import { Typography } from "@mui/material"; // Updated import

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ m: "auto 0" }}
            align="right"
            varient="body2"
            color="text.secondary"
            >
              05/08/23
            </TimelineOppositeContent>

            <TimelineSeparator>
              

              <TimelineConnector />
              <TimelineDot>
                <EventIcon /> 
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2}}>
              <Typography variant="h6">Title</Typography>
              <Typography>Descriptions</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default TimeLine;
