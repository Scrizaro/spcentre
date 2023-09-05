import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
  Collapse,
} from '@mui/material';

const CoursePage = () => {
  const [selectedLectures, setSelectedLectures] = useState([]);
  const [expandedLecture, setExpandedLecture] = useState(null);

  const handleLectureSelect = (lectureId) => {
    if (selectedLectures.includes(lectureId)) {
      setSelectedLectures(selectedLectures.filter(id => id !== lectureId));
    } else {
      setSelectedLectures([...selectedLectures, lectureId]);
    }
  };

  const handleLectureExpand = (lectureId) => {
    setExpandedLecture(expandedLecture === lectureId ? null : lectureId);
  };


  const lectures = [
    { id: 1, title: 'Лекция 1. Введение в курс', description: 'Краткое описание лекции которое рассказывает что будет на лекции.' },
    { id: 2, title: 'Лекция 2', description: 'Краткое описание лекции которое рассказывает что будет на лекции.' },
    { id: 3, title: 'Лекция 3', description: 'Краткое описание лекции которое рассказывает что будет на лекции.' },
    { id: 4, title: 'Лекция 4', description: 'Краткое описание лекции которое рассказывает что будет на лекции.' },
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Название курса
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Описание курса: Здесь будет описание содержания и целей курса.
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Список лекций
        </Typography>
        <FormControl component="fieldset">
          <FormGroup>
            {lectures.map(lecture => (
              <div key={lecture.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLectures.includes(lecture.id)}
                      onChange={() => handleLectureSelect(lecture.id)}
                    />
                  }
                  label={lecture.title}
                  onClick={() => handleLectureExpand(lecture.id)}
                />
                <Collapse in={expandedLecture === lecture.id}>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                    {lecture.description}
                  </Typography>
                </Collapse>
              </div>
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default CoursePage;