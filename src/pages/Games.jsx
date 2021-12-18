import React, { useEffect, useMemo, useState } from 'react'
import { fetchUrl } from '../functions/fetchUrl'

import types from '../data/types.json'
import categories from '../data/categories.json'
import difficulties from '../data/difficulty.json'

import { Box, Button, TextField, Typography } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

import PleaseWait from '../components/PleaseWait'
import { isArray } from '../functions/utils'

import Style from '../styles/Game.Style'

export default function Game() {
    const classes = Style();

    const [time, setTime] = useState(15);
    const [status, setStatus] = useState('welcome');
    const [questions, setQuestions] = useState([]);

    const [answer, updateAnswer] = useState({
        index: 0,
        joker: 1,
        isTrue: false,
        isAnswer: false,
        options: []
    })

    const [state, updateState] = useState({
        type: types[0],
        category: categories[0],
        difficulty: difficulties[0]
    });

    function setState(nextState) {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }))
    }

    function setAnswer(nextState) {
        updateAnswer(prevState => ({
            ...prevState,
            ...nextState
        }))
    }

    async function handleQuestions() {
        setStatus('loading');
        let apiName = '?amount=10';
        let { type, category, difficulty } = state;

        if (type) apiName += `&type=${type.key}`;
        if (category && category.key) apiName += `&category=${category.key}`;
        if (difficulty) apiName += `&difficulty=${difficulty.key}`;

        let response = await fetchUrl({ apiName });
        console.log({ response });

        if (response.response_code == 0) {
            let questions = response.results;
            setQuestions(questions);
            setStatus('done');
            setTime(15);
        }
    }

    function handleRandomOptions() {
        let { index } = answer;
        console.log({ index, questions });
        if (time == 15) {
            let buttons = [];

            isArray(questions) && buttons.push(
                <Button onClick={() => setAnswer({ isAnswer: true, isTrue: true })} className={classes.options}>
                    {questions[index].correct_answer}
                </Button>
            );

            isArray(questions) && isArray(questions[index].incorrect_answers) && questions[index].incorrect_answers.map(question => (
                buttons.push(
                    <Button key={question} onClick={() => setAnswer({ isAnswer: true, isTrue: false })} className={classes.options}>
                        {question}
                    </Button>
                )
            ));

            buttons.sort(() => 0.5 - Math.random());
            setAnswer({ options: buttons });
        }
    }

    function welcome() {
        let { type, category, difficulty } = state;
        return (
            <Box className={classes.subContainer}>
                <Typography className={classes.title}>Let's Start!</Typography>

                <Autocomplete
                    options={types}
                    getOptionLabel={(option) => option.desc}
                    value={type}
                    onChange={(event, newValue) => setState({ type: newValue })}
                    InputProps={{ className: classes.multilineColor }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            size='small'
                            variant='outlined'
                            label='Type'
                            color='#344450'
                        />
                    }
                    className={classes.select}
                />

                <Autocomplete
                    options={categories}
                    getOptionLabel={(option) => option.desc}
                    value={category}
                    onChange={(event, newValue) => setState({ category: newValue })}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            size='small'
                            variant='outlined'
                            label='Category'
                        />
                    }
                    className={classes.select}
                />

                <Autocomplete
                    options={difficulties}
                    getOptionLabel={(option) => option.desc}
                    value={difficulty}
                    onChange={(event, newValue) => setState({ difficulty: newValue })}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            size='small'
                            variant='outlined'
                            label='Difficulty'
                            className={classes.textSelect}
                        />
                    }
                    className={classes.select}
                />

                <Button onClick={handleQuestions} className={classes.submitBtn}>Start</Button>
            </Box>
        )
    }

    function getQuestion() {
        let { index, options } = answer;

        return (
            isArray(questions) &&
            <Box className={classes.subContainer}>
                <Box className={classes.header}>
                    <Typography className={classes.textHeader}>{`Question ${index + 1}/${questions.length}`}</Typography>
                    <Typography className={classes.textHeader}>{`${(index) * 100} Points`}</Typography>
                    <Typography className={classes.textHeader}>{`Remaining Time:  ${time}`}</Typography>
                </Box>
                <div
                    className={classes.question}
                    dangerouslySetInnerHTML={{ __html: questions[index].question }}
                />
                <Box className={classes.boxOptions}>
                    {isArray(options) && options.map(btn => btn)}
                </Box>
            </Box >
        )
    }

    function getResult() {
        let { isTrue, index, joker } = answer;

        return index == 9 ?
            <Box className={classes.falseAnswer}>
                <Typography className={classes.winner}>YOU WINNNNN!!</Typography>
                <Typography className={classes.winText}>You Got 1000/1000</Typography>
                <Button
                    onClick={() => window.location.reload()}
                    className={classes.nextBtn}
                >
                    Play Again
                </Button>
            </Box>
            :
            time == 0 ?
                <Box className={classes.falseAnswer}>
                    <Typography className={classes.falseText}>Time out</Typography>
                    <Box className={classes.boxAlertBtn}>
                        <Button
                            disabled={joker == 0}
                            onClick={() => {
                                setTime(15);
                                setAnswer({ joker: joker - 1, isAnswer: false });
                            }}
                            className={classes.jokerBtn}
                        >
                            UseJoker
                        </Button>
                        <Button
                            onClick={() => window.location.reload()}
                            className={classes.restartBtn}
                        >
                            Restart
                        </Button>
                    </Box>
                </Box>
                :
                isTrue ?
                    <Box className={classes.falseAnswer}>
                        <Typography className={classes.trueText}>True answer</Typography>
                        <Button
                            onClick={() => {
                                setTime(15);
                                setAnswer({ index: index + 1, isAnswer: false });
                            }}
                            className={classes.nextBtn}
                        >
                            Next
                        </Button>
                    </Box>
                    :
                    <Box className={classes.falseAnswer}>
                        <Typography className={classes.falseText}>False answer</Typography>
                        <Box className={classes.boxAlertBtn}>
                            <Button
                                disabled={joker == 0}
                                onClick={() => {
                                    setTime(15);
                                    setAnswer({ joker: joker - 1, isAnswer: false });
                                }}
                                className={classes.jokerBtn}
                            >
                                {joker} UseJoker
                            </Button>
                            <Button
                                onClick={() => window.location.reload()}
                                className={classes.restartBtn}
                            >
                                Restart
                            </Button>
                        </Box>
                    </Box>
    }

    useEffect(() => {
        if (status == 'done' && answer.isAnswer == false) {
            (time > 0) ?
                setTimeout(() => setTime(time - 1), 1000) :
                setAnswer({ isAnswer: true });
        }
    });

    useMemo(() => {
        handleRandomOptions();
    }, [answer.index, status])

    return (
        <Box className={classes.container}>
            {status === 'welcome' ? welcome() : null}
            {status === 'loading' ? <PleaseWait /> :
                answer.isAnswer ? getResult() : getQuestion()
            }
        </Box>
    )
}