import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import loading from '../../assets/loading.gif'
import MyShiftsCard from './MyShiftsCard'
import ShiftsAvailable from './ShiftsAvailable'
import { getAllShifts, getShiftId } from '../../redux/Actions/actions-Shifts'
import { useDispatch, useSelector } from 'react-redux';
import { Cards, ContainerS, Available } from './Shifts.Styles'
import { ProxShifts, DarkContainer, NoShift } from '../Training/Training.Styles'

export default function Shifts() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dispatch = useDispatch()
    const getUserid = useSelector((state) => state.reducerUser.user.id)
    useEffect(()=>{dispatch(getShiftId(getUserid))},[dispatch])
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    const getAll = useSelector((state)  => state.reducerShifts.allShifts)
    useEffect(() => {dispatch(getAllShifts(day, month, year))},[dispatch]);
    return ( 
        <ContainerS>
            <ScrollView>
            <Text style={{color: '#fff', 
                         fontSize: 20, 
                         marginLeft: 10, 
                         marginTop: 20, 
                         fontFamily:"Poppins_500Medium" 
                         }}>
            Mis Turnos</Text>
            <View>
                {
            myShift.length > 0 
            ? myShift.map(e =>{
                return(
                 <View key={e.id} style={{alignItems: 'center'}}>
                    <MyShiftsCard 
                      id={e.id}
                      weekday={e.weekday} 
                      day={e.day}
                      month={e.month}
                      beginning={e.beginning}
                      ending={e.ending} 
                      year={e.year}/>
                 </View>
                )      
            })
            : <View style={{alignItems: 'center'}}>
                <Cards>
                    <Text style={{fontSize: 16, padding: 9, fontFamily:"Poppins_500Medium" }}>Parece que no tienes turnos agendados...</Text>
                </Cards>
              </View>
                }
            </View>
            <View>
                <Text style={{color: '#fff', fontSize: 20, marginLeft: 10, marginTop: 20, fontFamily:"Poppins_500Medium" }}>Turnos disponibles</Text>
                <View>
                    {getAll.length !==0 ?
                     getAll.map(e => {
                         return (
                             <View key={e.id} style={{alignItems: 'center'}}>
                                 <ShiftsAvailable
                                  id={e.id}
                                  weekday={e.weekday}
                                  day={e.day}
                                  month={e.month}
                                  beginning={e.beginning}
                                  ending={e.ending}
                                  availability={e.availability}
                                  capacity={e.capacity}
                                  week={e.week}
                                  year={e.year}/>
                             </View>
                         )
                     })
                     : <Text style={{color: '#fff', alignSelf: 'center', marginTop: 50, fontFamily:"Poppins_500Medium" }}>Oops! No hay turnos Disponibles...</Text>
                    }
                </View>
            </View>
          </ScrollView>
        </ContainerS>
    )
}

export function PreViewShifts() {
    const dispatch = useDispatch()
    const getUserid = useSelector((state) => state.reducerUser.user.id)
    useEffect(()=>{dispatch(getShiftId(getUserid))},[dispatch])
    const myShift = useSelector((state) => state.reducerShifts.myShifts)
    return(
        <View>
            {
                myShift.length !== 0
                ?   <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <ProxShifts>
                        <View>
                            <Text style={{fontSize: 20}}>{myShift[0].weekday}</Text>
                            <Text style={{fontSize: 25}}>{myShift[0].day}/{myShift[0].month}/{myShift[0].year}</Text>
                        </View>
                    </ProxShifts>
                    <Available>
                        <DarkContainer style={{width:90, marginBottom: 5}}>
                            <Text style={{color: "#fff", fontSize: 20, alignSelf: 'center'}}>{myShift[0].availability}/{myShift[0].capacity}</Text>
                        </DarkContainer>
                        <Text>{myShift[0].beginning}hs a {myShift[0].ending}hs</Text>
                    </Available>
                   </View>
                :<View style={{flexDirection: 'row', alignItems: 'center'}}>
                <NoShift>
                    <Text  style={{alignSelf: 'center', fontSize: 17, fontFamily:"Poppins_500Medium"}}>¿Aun no sacaste un turno?</Text>
                </NoShift>
                 </View>
            }
        </View>
    )
}
