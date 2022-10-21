import Sucursal from "../models/Sucursal";

export const createSucursal = async (req, res) => {
    try {
        
    const{name, category} = req.body

    const newSucursal = new Sucursal({name, category});

    const sucursalSaved = await newSucursal.save()

    res.status(201).json(sucursalSaved)

    } catch (error) {
       return res.json({message: error.message})
    }

};

export const getSucursales = async (req, res) => {
    try {
        const sucursales = await Sucursal.find();
        res.json(sucursales)
    
    } catch (error) {
       return res.json({message: error.message})
    }


};

export const getSucursalById = async (req, res) => {
    try {
        const sucursal = await Sucursal.findById(req.params.sucursalId);
        res.status(200).json(sucursal)
    
    } catch (error) {
       return res.json({message: error.message})
    }

 
};

export const updateSucursalById = async (req, res) => {
    try {
        const updateSucursal = await Sucursal.findByIdAndUpdate(req.params.sucursalId, req.body, {
            new: true
        })
        res.status(200).json(updateSucursal)
    
    } catch (error) {
       return res.json({message: error.message})
    }


};

export const deleteSucursalById = async (req, res) => {
    try {
        const {sucursalId } = req.params;
        await Sucursal.findByIdAndDelete(req.params.sucursalId)
        res.status(204).json()
    
    } catch (error) {
       return res.json({message: error.message})
    }


}