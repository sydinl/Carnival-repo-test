import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { getTableList } from 'src/api/report-template';


const endpoints = [
  {
    value: 'carnival database',
    label: 'Carnival DB'
  },
  {
    value: 'storage',
    label: 'Azure Storage'
  }
];
export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    sourceEnd: 'carnival database',
    destinationEnd: 'storage',
    source: ''
  });
  const [tableList,setTableList] =  useState([])
  const handleChange = useCallback(
    (event) => {
      if(event.target.name==='sourceEnd'){
        if(event.target.value==='carnival database'){
          setTableList(['car_report','car_report1'])
          // getTableList(event.target.value).then((res)=>{
          //     setTableList(['car_report'])
          // })
        }else {
          setTableList([])
          values.source='car_report'
        }
      }
      

      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }))
     
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select source endpoint"
                  name="sourceEnd"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.sourceEnd}
                >
                  {endpoints.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select destination endpoint"
                  name="destinationEnd"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.destinationEnd}
                >
                  {endpoints.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                {tableList.length===0?(
                  <TextField
                      fullWidth
                      label="Source"
                      name="source"
                      onChange={handleChange}
                      required
                      value={values.source}
                    />
                ):(
                  <TextField
                  fullWidth
                  label="Select source table"
                  name="source"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.source}
                >
                  {tableList.map((table,idx) => (
                    <option
                      key={idx}
                      value={table}
                    >
                     {table}
                    </option>
                  ))}
                </TextField>
                )}
               
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="srcField"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" onClick={()=>confirm("aaa")}>
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
