interface Employees {
    analyticalChemistry: EmployeeData[],
    metallurgy: EmployeeData[],
    phdStudents: EmployeeData[]
}

interface EmployeeData {
    name: string,
    office: string,
    phone: string,
    email: string,
    gender: 'male' | 'female'
}

export const employees: Employees = {
    analyticalChemistry: [
        {
            name: 'Prof. dr hab. inż. Paweł Pohl',
            office: '125a/A2',
            phone: '24 94',
            email: 'pawel.pohl@pwr.edu.pl',
            gender: 'male'
        },
        {
            name: 'Dr. inż. Anna Leśniewicz',
            office: '120c/A3',
            phone: '40 57',
            email: 'anna.lesniewicz@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Dr. inż. Krzysztof Gręda',
            office: '125a/A2',
            phone: '24 94',
            email: 'krzysztof.greda@pwr.edu.pl',
            gender: 'male'
        },
        {
            name: 'Dr hab. inż. Maja Wełna, prof. uczelni',
            office: '215/A3',
            phone: '32 32',
            email: 'maja.welna@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Dr hab. inż. Anna Szymczycha-Madeja, prof. uczelni',
            office: '215/A3',
            phone: '32 32',
            email: 'anna.szymczycha-madeja@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Dr hab. inż. Piotr Jamróz, prof. uczelni',
            office: '124/A3',
            phone: '38 07',
            email: 'piotr.jamroz@pwr.edu.pl',
            gender: 'male'
        },
        {
            name: 'Dr. hab. inż. Anna Dzimitrowicz',
            office: '110/A3',
            phone: '28 15',
            email: 'anna.dzimitrowicz@pwr.edu.pl',
            gender: 'female'
        }
    ],
    metallurgy: [
        {
            name: 'Prof. dr hab. inż. Leszek Rycerz',
            office: '113/A3',
            phone: '33 47',
            email: 'leszek.rycerz@pwr.edu.pl',
            gender: 'male'
        },
        {
            name: 'Dr. inż. Ida Chojnacka',
            office: '111/A3',
            phone: '21 26',
            email: 'ida.chojnacka@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Dr. inż. Katarzyna Ochromowicz',
            office: '143/A3',
            phone: '24 05',
            email: 'katarzyna.ochromowicz@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Dr inż. Magdalena Pilśniak-Rabiega',
            office: '123/A3',
            phone: '34 15',
            email: 'magdalena.pilsniak-rabega@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Dr inż. Iwona Rutkowska',
            office: '120a/A3',
            phone: '28 15',
            email: 'iwona.rutkowska@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Dr inż. Monika Zabłocka-Malicka',
            office: '138/A3',
            phone: '24 49',
            email: 'monika.zablocka-malicka@pwr.edu.pl',
            gender: 'female'
        }
    ],
    phdStudents: [
        {
            name: 'Mgr inż. Dominik Terefinko',
            office: '112/A3',
            phone: '',
            email: 'dominik.terefinko@pwr.edu.pl',
            gender: 'male'
        },
        {
            name: 'Mgr inż. Monika Górska',
            office: '111/A3',
            phone: '21 26',
            email: 'monika.gorska@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Mgr inż. Tymoteusz Kliś',
            office: '120b/A3',
            phone: '',
            email: 'tymoteusz.klis@pwr.edu.pl',
            gender: 'male'
        },
        {
            name: 'Mgr inż. Mujahid Ameen',
            office: '120b/A3',
            phone: '',
            email: 'mujahid.ameen@pwr.edu.pl',
            gender: 'female'
        },
        {
            name: 'Mgr inż. Mateusz Bykowski',
            office: '112/A3',
            phone: '',
            email: 'mateusz.bykowski@pwr.edu.pl',
            gender: 'male'
        }
    ]
}