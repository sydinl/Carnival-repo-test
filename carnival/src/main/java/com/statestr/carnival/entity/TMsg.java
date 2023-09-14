package com.statestr.carnival.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author carnival
 * @since 2023-09-14
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("t_msg")
@ApiModel(value="TMsg对象", description="")
public class TMsg implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @TableField("source")
    private String source;

    @TableField("destination")
    private String destination;

    @TableField("raw_msg")
    private String rawMsg;

    @TableField("format")
    private String format;

    @TableField("created_time")
    private LocalDateTime createdTime;

    @TableField("created_by")
    private String createdBy;

    @TableField("updared_time")
    private LocalDateTime updaredTime;

    @TableField("updated_by")
    private String updatedBy;


}
