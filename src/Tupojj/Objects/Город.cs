﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tupojj
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Город.
    /// </summary>
    // *** Start programmer edit section *** (Город CustomAttributes)

    // *** End programmer edit section *** (Город CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГородE", new string[] {
            "id as \'Id\'",
            "name as \'Name\'"})]
    [View("ГородL", new string[] {
            "id as \'Id\'",
            "name as \'Name\'"})]
    public class Город : ICSSoft.STORMNET.DataObject
    {
        
        private int fid;
        
        private string fname;
        
        // *** Start programmer edit section *** (Город CustomMembers)

        // *** End programmer edit section *** (Город CustomMembers)

        
        /// <summary>
        /// id.
        /// </summary>
        // *** Start programmer edit section *** (Город.id CustomAttributes)

        // *** End programmer edit section *** (Город.id CustomAttributes)
        public virtual int id
        {
            get
            {
                // *** Start programmer edit section *** (Город.id Get start)

                // *** End programmer edit section *** (Город.id Get start)
                int result = this.fid;
                // *** Start programmer edit section *** (Город.id Get end)

                // *** End programmer edit section *** (Город.id Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Город.id Set start)

                // *** End programmer edit section *** (Город.id Set start)
                this.fid = value;
                // *** Start programmer edit section *** (Город.id Set end)

                // *** End programmer edit section *** (Город.id Set end)
            }
        }
        
        /// <summary>
        /// name.
        /// </summary>
        // *** Start programmer edit section *** (Город.name CustomAttributes)

        // *** End programmer edit section *** (Город.name CustomAttributes)
        [StrLen(255)]
        public virtual string name
        {
            get
            {
                // *** Start programmer edit section *** (Город.name Get start)

                // *** End programmer edit section *** (Город.name Get start)
                string result = this.fname;
                // *** Start programmer edit section *** (Город.name Get end)

                // *** End programmer edit section *** (Город.name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Город.name Set start)

                // *** End programmer edit section *** (Город.name Set start)
                this.fname = value;
                // *** Start programmer edit section *** (Город.name Set end)

                // *** End programmer edit section *** (Город.name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГородE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГородE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГородE", typeof(IIS.Tupojj.Город));
                }
            }
            
            /// <summary>
            /// "ГородL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГородL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГородL", typeof(IIS.Tupojj.Город));
                }
            }
        }
    }
}
